-- Verify flipr:framethrower_public.type.premium_status on pg

begin;

  select 1/count(*) from pg_type where typname = 'premium_status';

rollback;
