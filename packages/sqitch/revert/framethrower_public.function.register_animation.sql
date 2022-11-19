-- Revert flipr:framethrower_public.function.register_animation from pg

begin;

  drop function if exists framethrower_public.register_animation(text,integer, integer, text, text, uuid, uuid, boolean, text, boolean);

commit;
