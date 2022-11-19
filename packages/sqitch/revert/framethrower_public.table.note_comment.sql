-- Revert flipr:framethrower_public.table.note_comment from pg

begin;

  drop table if exists framethrower_public.note_comment cascade;

commit;
