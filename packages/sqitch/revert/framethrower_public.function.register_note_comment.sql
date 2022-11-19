-- Revert flipr:framethrower_public.function.register_note_comment from pg

BEGIN;

  drop function if exists framethrower_public.register_note_comment(text, text);

COMMIT;
