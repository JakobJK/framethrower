-- Revert framethrower:framethrower_public.function.delete_own_note from pg

begin;
  drop function if exists framethrower_public.delete_own_note(text);

commit;
