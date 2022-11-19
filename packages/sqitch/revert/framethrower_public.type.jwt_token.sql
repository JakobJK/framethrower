-- Revert flipr:framethrower_public.type.jwt_token from pg

begin;

  drop type if exists framethrower_public.jwt_token cascade;

commit;
