use computer_service;

create user 'serviceman'@'localhost' identified by 'passwd';
flush privileges;

grant select on application_view to 'serviceman'@'localhost';
grant select on client_view to 'serviceman'@'localhost';
grant select on delivery_view to 'serviceman'@'localhost';
grant select on home_visit_view to 'serviceman'@'localhost';
grant select on service_view to 'serviceman'@'localhost';
grant select on serviceman_view to 'serviceman'@'localhost';

grant select (id, serviceman_id, client_id, application_date, application_details, delivery, home_visit,
              status), update (status) on application to 'serviceman'@'localhost';