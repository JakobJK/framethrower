-- Revert flipr:framethrower_public.function.register_feedback_response from pg

BEGIN;

  drop function if exists framethrower_public.register_feedback_response(text, text);

COMMIT;
