module.exports = {
    // Получение информации о студенте в журнале
    get_student_all_journal: `SELECT DISTINCT
    t3.student_id,
    student.surname,
    student.name as student_name,
    student.second_name,
    t3.short_name,
    t3.value,
    t3.name as mark_name,
    study_group.name as group_name FROM student
    INNER JOIN journal
    ON student.id = journal.student_id
    INNER JOIN
    (SELECT mark.value, t2.short_name, t2.student_id, mark.name FROM mark INNER JOIN (SELECT subject.short_name, t1.student_id, t1.mark_id FROM subject INNER JOIN
    (SELECT study_plan.subject_id, journal.student_id, journal.mark_id FROM study_plan INNER JOIN journal
    ON study_plan.id = journal.study_plan_id) as t1 ON subject.id = t1.subject_id) as t2 ON t2.mark_id = mark.id) as t3
    ON t3.student_id = student.id
    INNER JOIN study_group ON student.study_group_id = study_group.id`,
    /*
    --Аналог выше
    SELECT t1.id, t1.short_name, t1.in_time, t1.count, t1.count, t1.mark_name, t1.surname, t1.name, t1.second_name, t1.group_name FROM (select journal.id, (select short_name from subject where journal.study_plan_id = subject.id), journal.in_time, journal.count, (select name from mark where id = journal.mark_id
    ) as mark_name, student.surname, student.name, student.second_name, (select name from study_group where id = student.study_group_id) as group_name from journal inner join student on 
    student.id = journal.student_id) as t1 WHERE t1.group_name='ИКБО-11-17'
    */
    // Добавление студента
    add_students: `INSERT INTO student (surname, name, second_name, study_group_id) VALUES
    ($1, $2, $3, (SELECT study_group.id FROM study_group WHERE study_group.name = $4))
    RETURNING *`,
    // Просмотр всех студентов
    get_all_students: 'SELECT * FROM student',
    // Просмотр студента по id
    get_id_all_students: 'SELECT * FROM student WHERE id = $1',
    // Просмотр студентов по группе
    get_all_students_in_group: `SELECT * FROM student
    INNER JOIN study_group
    ON student.study_group_id = study_group.id AND study_group.name = $1`,
    // Редактирование студента
    change_students: `UPDATE student SET surname=$1, name=$2, second_name=$3, study_group_id = (SELECT id FROM study_group WHERE study_group.name = $4)
    WHERE student.id=$5
    RETURNING *`,
    // Удаление студента
    delete_students: 'DELETE FROM student WHERE id = $1 RETURNING *',
    // Количество пересдач по каждому студенту
    col_retake_students: `SELECT t1.id, t1.surname, t1.name, t1.second_name, t1.group, COUNT(t1.mark_id) FROM (SELECT student.id, student.surname, student.name, student.second_name, study_group.name as group, journal.mark_id
    FROM student INNER JOIN journal ON journal.student_id = student.id INNER JOIN study_group ON study_group.id = student.study_group_id
    WHERE journal.mark_id=4 OR journal.mark_id=7 OR journal.mark_id=6) as t1 GROUP BY t1.id, t1.surname, t1.name, t1.second_name, t1.group`,
    // Вывод всех студентов с долгами
    get_all_studet_dept: `SELECT t1.id, t1.surname, t1.name, t1.second_name, t1.group, COUNT(t1.mark_id) FROM (SELECT student.id, student.surname, student.name, student.second_name, study_group.name as group, journal.mark_id
    FROM student INNER JOIN journal ON journal.student_id = student.id INNER JOIN study_group ON study_group.id = student.study_group_id
    WHERE journal.mark_id=4 OR journal.mark_id=7 OR journal.mark_id=6) as t1
    GROUP BY t1.id, t1.surname, t1.name, t1.second_name, t1.group`,
}