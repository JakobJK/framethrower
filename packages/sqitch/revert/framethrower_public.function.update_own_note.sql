-- Revert flipr:framethrower_public.function.update_own_note from pg

begin;

  drop function if exists framethrower_public.update_own_note(text, text, text);

commit;
