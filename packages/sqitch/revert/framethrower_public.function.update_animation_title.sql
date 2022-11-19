-- Revert flipr:framethrower_public.function.update_animation_title from pg

begin;

  drop function if exists framethrower_public.update_animation_title(text, text);

commit;
