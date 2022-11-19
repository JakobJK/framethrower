-- Verify flipr:framethrower_public.type.premium on pg


begin;

  select 1/count(*) from pg_type where typname = 'profile_premium';

rollback;
