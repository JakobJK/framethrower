-- Revert flipr:framethrower_public.function.register_note from pg

BEGIN;

  drop function if exists framethrower_public.register_note(text, text, text);

COMMIT;
