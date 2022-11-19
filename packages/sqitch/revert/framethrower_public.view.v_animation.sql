-- Revert flipr:framethrower_public.view.v_animation from pg

begin;

  drop view if exists framethrower_public.v_animation;

commit;
