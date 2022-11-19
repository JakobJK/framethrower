-- verify flipr:framethrower_private on pg

begin;

  select 1/count(*)
  from information_schema.schemata
  where schema_name = 'framethrower_private';

rollback;
