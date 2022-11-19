-- Revert flipr:framethrower_public.function.register_new_banner from pg

begin;

  drop function if exists framethrower_public.register_new_banner(text);

commit;