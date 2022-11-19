-- Revert flipr:framethrower_public.function.register_new_avatar from pg

begin;

  drop function if exists framethrower_public.register_new_avatar(text);

commit;