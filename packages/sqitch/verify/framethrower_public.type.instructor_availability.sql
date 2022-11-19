-- Verify flipr:framethrower_public.type.instructor_availability on pg


begin;

  select 1/count(*) from pg_type where typname = 'instructor_availability';

rollback;
