use computer_service;

create or replace view application_view as
select *
from application;

create or replace view client_view as
select *
from client;

create or replace view delivery_view as
select *
from delivery;

create or replace view home_visit_view as
select *
from home_visit;


create or replace view service_view as
select *
from service;

create or replace view serviceman_view as
select *
from serviceman;
