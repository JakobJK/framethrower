-- Deploy flipr:framethrower_public.table.feedback_response to pg

begin;

  create table framethrower_public.feedback_response(
    id uuid primary key not null default uuid_generate_v4(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    submission_id text not null references framethrower_public.submission(id) on delete cascade,
    link text,
    thumbnail text,
    feedback_request_id uuid not null references framethrower_public.feedback_request(id) on delete cascade,
    status framethrower_public.feedback_response_status not null default 'pending'
  );

  grant select on table framethrower_public.feedback_response to
  framethrower_user,
  framethrower_moderator,
  framethrower_admin;

  grant update on table framethrower_public.feedback_response to
  framethrower_user,
  framethrower_moderator,
  framethrower_admin;

  create unique index unique_feedback_response_status_animation_status
  on framethrower_public.feedback_response (profile_id, status)
  where status = 'pending';


  create unique index unique_feedback_response_status_submission_status
  on framethrower_public.feedback_response (submission_id, status)
  where status = 'processed';

commit;