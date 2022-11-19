-- Revert flipr:framethrower_public.function.change_password from pg

begin;

  drop function if exists framethrower_public.change_password(text, text, text);

commit;
