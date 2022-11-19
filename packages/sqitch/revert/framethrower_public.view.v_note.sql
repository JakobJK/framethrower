-- Revert flipr:framethrower_public.view.v_notes from pg

begin;

  drop view if exists framethrower_public.v_note;

commit;
