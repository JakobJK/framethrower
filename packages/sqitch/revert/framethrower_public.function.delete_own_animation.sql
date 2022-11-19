-- Revert flipr:framethrower_public.function.delete_own_animation from pg

begin;

  drop function if exists framethrower_public.delete_own_animation(text);

commit;
