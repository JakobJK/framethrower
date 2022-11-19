-- Verify flipr:framethrower_public.type.jwt_token on pg

begin;

  select 1/count(*) from pg_type where typname = 'jwt_token';

rollback;
