-- Revert flipr:framethrower_public.function.claim_feedback from pg

begin;

  drop function if exists framethrower_public.claim_feedback(text, text);

commit;
