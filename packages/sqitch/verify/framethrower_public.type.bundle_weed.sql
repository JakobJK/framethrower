-- Verify flipr:framethrower_public.type.tumbleweed on pg

begin;

  select 1/count(*) from pg_type where typname = 'bundle_weed';

rollback;

