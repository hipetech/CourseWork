# selectServiceMan
select id, first_name, last_name, service_id
from computer_service.serviceman_view;

# selectService
select id, service_name, price
from computer_service.service_view;

# add application

insert computer_service.client(first_name, last_name, email, phone_number, address)
    value ('Володимир', 'Мозайчук', 'example@gmail.com', '+38055487515', 'test');

insert computer_service.application(serviceman_id, client_id, application_date, application_details, delivery,
                                    home_visit)
    value (1, (select id from computer_service.client where first_name = 'Володимир' and last_name = 'Мозайчук'),
           '2021-02-02', '', 1, 1)