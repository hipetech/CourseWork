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