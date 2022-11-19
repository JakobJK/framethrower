-- Revert framethrower:framethrower_public.function.delete_own_note_comment from pg

begin;
  drop function if exists framethrower_public.delete_own_note_comment(uuid);

commit;
