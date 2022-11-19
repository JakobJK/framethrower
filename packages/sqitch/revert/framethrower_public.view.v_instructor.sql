-- Revert flipr:framethrower_public.view.v_instructors from pg

begin;

  drop view if exists framethrower_public.v_instructor;

commit;
