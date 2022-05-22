use computer_service;

create user 'client'@'localhost' identified by 'passwd';
flush privileges;

grant select, insert, update on application to 'client'@'localhost';
grant select, insert, update on client to 'client'@'localhost';
grant select on serviceman_view to 'client'@'localhost';
grant select on service_view to 'client'@'localhost';