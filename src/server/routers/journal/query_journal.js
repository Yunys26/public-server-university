module.exports = {
    // Тип аттестации
    get_type_attestation: `SELECT t1.short_name, t1.name, exam_type.type FROM (SELECT subject.name, subject.short_name, study_plan.exam_type_id
    FROM subject
    INNER JOIN study_plan ON subject.id = study_plan.subject_id) as t1
    INNER JOIN exam_type ON exam_type.id = t1.exam_type_id ORDER BY t1.short_name`,
    //     --Предметы, у который тип экзамена - что-то
    // SELECT t1.id, t1.short_name, exam_type.type FROM exam_type INNER JOIN (SELECT subject.id, subject.short_name, study_plan.exam_type_id
    // FROM subject INNER JOIN study_plan ON study_plan.subject_id = subject.id) as t1 ON exam_type.id = t1.exam_type_id AND exam_type.type="Экзамен"
    // Просмотр записей журнала
    get_all_journal: `SELECT * FROM journal`,
    // Просмотр записей журнала по студенту
    get_journal_and_student: `SELECT journal.id, journal.student_id, journal.student_plan_id, journal.in_time, journal.count, journal.mark_id
    FROM journal  INNER JOIN student ON journal.student_id = student.id AND journal.student_id = $1`,
    // Просмотр записей журнала по группе
    get_journal_and_group: `SELECT * FROM journal
    INNER JOIN (SELECT student.id as id, student.name as name, study_group.name as group  FROM student INNER JOIN study_group ON student.study_group_id = study_group.id AND study_group.name=$1) 
    as tmp ON journal.student_id = tmp.id`,
    // Редактирование оценок в журнале
    change_rating_in_journal: `UPDATE journal SET mark_id=$1 WHERE journal.id=$2 RETURNING *`
}