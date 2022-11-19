-- Revert flipr:framethrower_public.function.submission_has_pro_feedback from pg

begin;

  drop function if exists framethrower_public.submission_has_pro_feedback(framethrower_public.submission);

commit;
