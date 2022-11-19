-- Revert flipr:framethrower_public.view.v_own_notes from pg

begin;

  drop view if exists framethrower_public.v_own_note;

commit;
