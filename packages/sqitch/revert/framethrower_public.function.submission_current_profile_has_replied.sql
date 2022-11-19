-- Revert flipr:framethrower_public.function.submission_current_profile_has_replied from pg

begin;

  drop function if exists framethrower_public.submission_current_profile_has_replied(framethrower_public.submission);

commit;
