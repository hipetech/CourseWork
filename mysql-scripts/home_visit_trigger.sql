use computer_service;

create trigger home_visit_append
    after insert
    on application
    for each row
    if new.home_visit = 1 then
        insert into home_visit(application_id)
            value (new.id);
    end if;

create trigger home_visit_remove
    before delete
    on application
    for each row
    if old.home_visit = 1 then
        delete from home_visit
            where application_id = old.id;
    end if;




