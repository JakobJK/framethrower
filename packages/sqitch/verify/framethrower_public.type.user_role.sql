-- Verify flipr:framethrower_hidden.type.user_role on pg

begin;

  select 1/count(*) from pg_type where typname = 'user_role';

rollback;
