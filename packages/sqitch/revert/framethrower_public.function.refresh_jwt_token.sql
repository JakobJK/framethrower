-- Revert flipr:framethrower_public.function.refresh_jwt_token from pg

begin;

 drop function if exists framethrower_public.refresh_jwt_token;

commit;
