/*
    BEGIN_MODULE SPKAC-Schema
    OID: undefined
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    SubjectPublicKeyInfo,
    _decode_AlgorithmIdentifier,
    _decode_SubjectPublicKeyInfo,
    _encode_AlgorithmIdentifier,
    _encode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/AuthenticationFramework";
import * as __utils from "./__utils";

export class PublicKeyAndChallenge {
    constructor(
        readonly spki: SubjectPublicKeyInfo,
        readonly challenge: asn1.IA5String
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicKeyAndChallenge: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "spki",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "challenge",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PublicKeyAndChallenge: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PublicKeyAndChallenge: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PublicKeyAndChallenge: __utils.ASN1Decoder<
    PublicKeyAndChallenge
> | null = null;
let _cached_encoder_for_PublicKeyAndChallenge: __utils.ASN1Encoder<
    PublicKeyAndChallenge
> | null = null;
export function _decode_PublicKeyAndChallenge(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PublicKeyAndChallenge) {
        _cached_decoder_for_PublicKeyAndChallenge = function (
            el: asn1.ASN1Element
        ): PublicKeyAndChallenge {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PublicKeyAndChallenge contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "spki";
            sequence[1].name = "challenge";
            let spki!: SubjectPublicKeyInfo;
            let challenge!: asn1.IA5String;
            spki = _decode_SubjectPublicKeyInfo(sequence[0]);
            challenge = __utils._decodeIA5String(sequence[1]);
            // TODO: Validate values.
            return new PublicKeyAndChallenge(spki, challenge);
        };
    }
    return _cached_decoder_for_PublicKeyAndChallenge(el);
}
export function _encode_PublicKeyAndChallenge(
    value: PublicKeyAndChallenge,
    elGetter: __utils.ASN1Encoder<PublicKeyAndChallenge>
) {
    if (!_cached_encoder_for_PublicKeyAndChallenge) {
        _cached_encoder_for_PublicKeyAndChallenge = function (
            value: PublicKeyAndChallenge,
            elGetter: __utils.ASN1Encoder<PublicKeyAndChallenge>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                            value.spki,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeIA5String(
                            value.challenge,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PublicKeyAndChallenge(value, elGetter);
}

export class SignedPublicKeyAndChallenge {
    constructor(
        readonly publicKeyAndChallenge: PublicKeyAndChallenge,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedPublicKeyAndChallenge: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "publicKeyAndChallenge",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignedPublicKeyAndChallenge: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedPublicKeyAndChallenge: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignedPublicKeyAndChallenge: __utils.ASN1Decoder<
    SignedPublicKeyAndChallenge
> | null = null;
let _cached_encoder_for_SignedPublicKeyAndChallenge: __utils.ASN1Encoder<
    SignedPublicKeyAndChallenge
> | null = null;
export function _decode_SignedPublicKeyAndChallenge(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedPublicKeyAndChallenge) {
        _cached_decoder_for_SignedPublicKeyAndChallenge = function (
            el: asn1.ASN1Element
        ): SignedPublicKeyAndChallenge {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "SignedPublicKeyAndChallenge contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "publicKeyAndChallenge";
            sequence[1].name = "signatureAlgorithm";
            sequence[2].name = "signature";
            let publicKeyAndChallenge!: PublicKeyAndChallenge;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: asn1.BIT_STRING;
            publicKeyAndChallenge = _decode_PublicKeyAndChallenge(sequence[0]);
            signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
            signature = __utils._decodeBitString(sequence[2]);
            // TODO: Validate values.
            return new SignedPublicKeyAndChallenge(
                publicKeyAndChallenge,
                signatureAlgorithm,
                signature
            );
        };
    }
    return _cached_decoder_for_SignedPublicKeyAndChallenge(el);
}
export function _encode_SignedPublicKeyAndChallenge(
    value: SignedPublicKeyAndChallenge,
    elGetter: __utils.ASN1Encoder<SignedPublicKeyAndChallenge>
) {
    if (!_cached_encoder_for_SignedPublicKeyAndChallenge) {
        _cached_encoder_for_SignedPublicKeyAndChallenge = function (
            value: SignedPublicKeyAndChallenge,
            elGetter: __utils.ASN1Encoder<SignedPublicKeyAndChallenge>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PublicKeyAndChallenge(
                            value.publicKeyAndChallenge,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signatureAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.signature,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SignedPublicKeyAndChallenge(value, elGetter);
}

/* END_MODULE SPKAC-Schema */
