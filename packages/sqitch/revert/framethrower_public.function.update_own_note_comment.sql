-- Revert flipr:framethrower_public.function.update_own_note_comment from pg

begin;

  drop function if exists framethrower_public.update_own_note_comment(text, text);

commit;
