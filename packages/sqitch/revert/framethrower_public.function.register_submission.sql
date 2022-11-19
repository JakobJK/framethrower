-- revert flipr:framethrower_public.function.register_submission from pg

begin;

  drop function framethrower_public.register_submission( text, text, uuid, text, uuid, boolean, integer, integer, text, boolean);

commit;
