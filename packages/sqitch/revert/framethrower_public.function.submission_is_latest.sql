-- Revert flipr:framethrower.function.submission_is_latest from pg

begin;

  drop function if exists framethrower_public.submission_is_latest(framethrower_public.submission);

commit;
