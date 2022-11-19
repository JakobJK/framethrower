-- Deploy flipr:framethrower_public.type.animation_submission to pg
begin;
    create type framethrower_public.animation_submission as (
        animation_id text,
        title text,
        profile_id uuid,
        submission_id text,
        start_frame integer,
        end_frame integer,
        thumbnail_url text,
        video_url text,
        comment text,
        created_at timestamptz
    );
commit;