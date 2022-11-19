-- Verify flipr:framethrower_public.type.project_status on pg

begin;

  select 1/count(*) from pg_type where typname = 'publish_status';

rollback;
