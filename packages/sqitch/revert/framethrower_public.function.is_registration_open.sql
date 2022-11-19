-- Revert flipr:framethrower_public.function.is_registration_open from pg

begin;

  drop function if exists framethrower_public.is_registration_open();

commit;
