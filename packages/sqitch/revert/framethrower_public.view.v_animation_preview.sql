-- Revert flipr:framethrower_public.view.v_animations from pg

begin;

  drop view if exists framethrower_public.v_animation_preview;

commit;
