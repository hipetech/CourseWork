use computer_service;

create trigger delivery_append
    after insert
    on application
    for each row
    if new.delivery = 1 then
        insert into delivery(application_id)
            value (new.id);
    end if;

create trigger delivery_remove
    before delete
    on application
    for each row
    if old.delivery = 1 then
        delete from delivery
            where application_id = old.id;
    end if;

