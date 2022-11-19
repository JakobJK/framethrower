-- Revert flipr:framethrower_public.view.v_pool from pg

begin;

  drop view if exists framethrower_public.v_instructor_pool;

commit;
