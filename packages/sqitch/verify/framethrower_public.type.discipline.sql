-- Verify flipr:framethrower_public.type.discipline on pg

begin;

  select 1/count(*) from pg_type where typname = 'discipline';

rollback;

