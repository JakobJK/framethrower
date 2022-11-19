-- Deploy flipr:framethrower.function.submission_is_latest to pg

begin;
  create or replace function framethrower_public.submission_is_latest(submission framethrower_public.submission) returns boolean as $$
    select distinct on (anim.id)
    sub.id = submission.id
    from framethrower_public.animation anim
    join framethrower_public.submission sub
    on anim.id = sub.animation_id
    where anim.id = submission.animation_id
    group by anim.id, sub.id
    order by anim.id asc, sub.created_at desc;
  $$ language sql stable;

  grant execute on function framethrower_public.submission_is_latest(submission framethrower_public.submission) to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;