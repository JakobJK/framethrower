begin;
select plan(3);

-- Function does indeed exists
select has_function(
    'framethrower_public',
    'register_submission',
    ARRAY['text', 'text', 'uuid', 'text', 'uuid', 'boolean', 'integer', 'integer', 'text', 'boolean'],
    'register_submission exists'
);

-- Definition of what the function is written in.
-- This is particular helpful when looking to optimize functions.
-- SQL functions should be prefered at all times, but plpgsql can be necessary.

select function_lang_is(
    'framethrower_public',
    'register_submission',
    array['text', 'text', 'uuid', 'text', 'uuid', 'boolean', 'integer', 'integer', 'text', 'boolean'],
    'plpgsql',
    'register_submission is plpgsql'
);


select function_returns('framethrower_public', 'register_submission', 'framethrower_public.animation_submission', 'register_submission returns framethrower_public.profile');


select * from finish();
rollback;