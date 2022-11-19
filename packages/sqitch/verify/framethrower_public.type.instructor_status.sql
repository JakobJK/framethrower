-- Verify flipr:framethrower_public.type.instructor_status on pg


begin;

  select 1/count(*) from pg_type where typname = 'instructor_status';

rollback;
