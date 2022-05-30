use computer_service;
select id
from computer_service.serviceman_view
where email = 'kirikfifa@aevtpet.com'
  and password = '8KY><B=}my&9EhWF';

use computer_service;
select first_name, last_name, email, phone_number, (select service_name from service_view where id = service_id)
from serviceman_view
where id = 1
limit 1;

use computer_service;
select application_view.id,
       first_name,
       last_name,
       email,
       phone_number,
       address,
       application_date,
       application_details,
       delivery,
       home_visit,
       application_view.status
from client_view,
     application_view
where client_view.id = client_id
  and serviceman_id = 1;

use computer_service;
update computer_service.application
set computer_service.application.status = 'DONE'
where id = 4;
