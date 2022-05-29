// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "./libraries/MerklePatriciaTrie.sol";

contract TestMPT {
    using MerklePatriciaTrie for MerklePatriciaTrie.MPT;
    using MerklePatriciaTrie for bytes32;
    using MerklePatriciaTrie for bytes;

    function bytesToNibbles(bytes memory data, bytes memory nibbles)
        public
        pure
        returns (bytes memory)
    {
        return data.bytesToNibbles(nibbles);
    }

    function matchNibbles(bytes memory src, bytes memory dst)
        public
        pure
        returns (uint256)
    {
        return src.matchNibbles(dst);
    }

    function prove(
        bytes32 root,
        bytes memory key,
        bytes[] memory proofs
    ) public returns (bytes memory) {
        return root.prove(key, proofs);
    }
}